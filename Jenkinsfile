pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root'
        }
    }

    environment {
        BRANCH_NAME = 'master'
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

        stage('Merge PR Safely') {
            steps {
                withCredentials([string(credentialsId: 'hieunv-sabi', variable: 'GITHUB_TOKEN')]) {
                    script {
                        echo "Merging PR #${PR_NUMBER}..."

                        def statusCode = sh(
                            script: '''
                                curl -s -o response.json -w "%{http_code}" -X PUT \\
                                     -H "Authorization: token $GITHUB_TOKEN" \\
                                     -H "Accept: application/vnd.github.v3+json" \\
                                     https://api.github.com/repos/${GITHUB_REPO}/pulls/${PR_NUMBER}/merge
                            ''',
                            returnStdout: true
                        ).trim()

                        echo "GitHub API status code: ${statusCode}"
                        sh 'cat response.json'

                        if (statusCode != "200") {
                            error "❌ Merge failed with status code ${statusCode}"
                        } else {
                            echo "✅ PR #${PR_NUMBER} merged successfully!"
                        }
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

