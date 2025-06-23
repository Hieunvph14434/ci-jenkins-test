pipeline {
    agent none

    environment {
        BRANCH_NAME = 'master'
        GITHUB_REPO = 'Hieunvph14434/ci-jenkins-test'
        PR_NUMBER   = "${ghprbPullId}" 
    }

    stages {
        stage('Code Check inside Docker') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root'
                }
            }
            stages {
                stage('Checkout') {
                    steps {
                        checkout scm
                    }
                }
                stage('Install Dependencies') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('Run Linter') {
                    steps {
                        sh 'npm run lint'
                    }
                }
                stage('Lint Passed') {
                    steps {
                        echo '✅ Code passed lint check'
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

