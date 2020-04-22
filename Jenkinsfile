pipeline {
    agent {
        label "Linux" 
    }
    stages {
        stage('Build') {
            steps {
                cleanWs()
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
