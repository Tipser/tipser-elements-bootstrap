#!/usr/bin/env groovy
properties([
    pipelineTriggers([
        [$class: 'GitHubPushTrigger']
    ]),
    disableConcurrentBuilds(),
    overrideIndexTriggers(false),
    buildDiscarder(
        logRotator(
            artifactDaysToKeepStr: '',
            artifactNumToKeepStr: '',
            daysToKeepStr: '',
            numToKeepStr: '10'
        )
    )
])

node {
    withEnv(["DOCKER_BUILDKIT=1"]) {
        def dockerFileName = "Dockerfile-CI"
        try {
            stage('Checkout') {
                scmVars = checkout scm
                version = "${env.BRANCH_NAME}-${scmVars.GIT_COMMIT.take(8)}-${env.BUILD_NUMBER}"
                currentBuild.displayName = version
            }

            stage('Check the latest tipser-elements') {
                sh """
                    npm view @tipser/tipser-elements@latest .version | tee tipser-elements.latest
                """
            }

            stage('Deps') {
                sh """
                    sudo docker build -f "${dockerFileName}" --target deps .
                """
            }
            withCredentials([sshUserPrivateKey(credentialsId: 'jenkins_tipser-bot_tipser_com', keyFileVariable: 'checkout_key', passphraseVariable: '', usernameVariable: '')]) {
                stage('Deploy') {
                    sh """
                        cp "\${checkout_key}" ./id_rsa
                        sudo docker build -f "${dockerFileName}" --target deploy .
                    """
                }
            }

        } catch (e) {
            throw e
        } finally {
            stage('Clean WS') {
                step([$class: 'WsCleanup'])
            }
        }
    }
}
