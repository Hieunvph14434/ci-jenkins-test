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
                    credentialsId: '2e41b5a7-bc65-4d28-97d9-5c58c7aaf815',
                    url: 'https://github.com/Hieunvph14434/ci-jenkins-test.git'

                sh 'npm install'
                sh 'npm run lint'
            }
        }
    }
}
