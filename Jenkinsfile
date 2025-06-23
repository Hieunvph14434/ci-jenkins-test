pipeline {
    agent any

    stages {
        stage('Install & Lint') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root'
                }
            }

            steps {
                git branch: 'master',
                    credentialsId: '1fe7d95d-2896-4e34-969e-2a065149b53f',
                    url: 'https://github.com/Hieunvph14434/ci-jenkins-test.git'

                sh 'npm install'
                sh 'npm run lint'
            }
        }
    }
}

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

