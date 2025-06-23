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
