pipeline {
    environment {
        GIT_REPO = "https://github.com/denisgaina/RandomQuotes-JS.git"
        BRANCH = "master"
    }

    agent {
        label "Linux" 
    }
    
    stages {
        stage ("Clean workspace") {
            steps {
                cleanWs()
            }
        }

        stage ("Get sources") {
            steps {
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

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
            }
        }
    }
}
