pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root'
        }
    }

    environment {
        BRANCH_NAME = 'master'
        GITHUB_TOKEN = credentials('hieunv-sabi')
        GITHUB_REPO = 'Hieunvph14434/ci-jenkins-test'
        PR_NUMBER   = "${ghprbPullId}" 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Check code convention...') {
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }
        stage('Check done!') {
            steps {
                echo 'Check code convention successfully!!!'
            }
        }

        stage('Auto Merge PR') {
            when {
                expression { return env.CHANGE_ID != null }
            }
            steps {
                script {
                    echo "Merging PR #${PR_NUMBER} to ${BRANCH_NAME}..."

                    def response = sh (
                        script: """
                        curl -s -o response.json -w "%{http_code}" -X PUT \\
                        -H "Authorization: token ${GITHUB_TOKEN}" \\
                        -H "Accept: application/vnd.github.v3+json" \\
                        https://api.github.com/repos/${GITHUB_REPO}/pulls/${PR_NUMBER}/merge
                        """,
                        returnStdout: true
                    ).trim()

                    echo "Merge API response code: ${response}"
                    sh "cat response.json"

                    if (response != "200") {
                        error "❌ Merge failed. Status code: ${response}"
                    } else {
                        echo "✅ Merge successful!"
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up after the build.'
        }
        success {
            echo 'Linting passed successfully.'
        }
        failure {
            echo 'Linting failed. Please check the logs.'
        }
    }
}

