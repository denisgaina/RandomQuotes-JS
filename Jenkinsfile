pipeline {
    environment {
        GIT_REPO = "https://github.com/denisgaina/RandomQuotes-JS.git"
        BRANCH = "master"
    }

    agent {
        label "Linux" 
    }
    
    stages {
        stage ("Build") {
            steps {
                sh "npm install"
            }
        }
    }

    post {
        success {
            script{
                sh "npm test"
                cleanWs()
            }
        }
    }
}
