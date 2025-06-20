pipeline {
  agent {
    docker { image 'node:18-alpine' }
  }

  stages {
    stage('Echo text') {
      steps {
        echo 'HEllo WoRld!!!'
      }
    }

    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
  }
}
