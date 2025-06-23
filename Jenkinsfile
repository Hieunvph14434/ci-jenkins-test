pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root'
        }
    }

    environment {
        BRANCH_NAME = 'master'
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

