pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm config set legacy-peer-deps true"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }

        // stage("Deploy") {
        //     steps {
        //         sh "echo ${WORKSPACE}"
        //         // dev server 
        //         // sh "sudo cp -r /var/lib/jenkins/workspace/dev_workwise/ /var/www/html/workwise"
        //         // sh "sudo chown -R root:root /var/www/html/workwise"
        //         // production server 
        //         // sh "sudo cp -r /var/lib/jenkins/workspace/TF_Growth /var/www/html"
        //         // sh "sudo chown -R root:root /var/www/html/TF_Growth"
        //     }
        // }
          
          stage("Nginx Restart") {
            steps {   
                sh "sudo systemctl restart nginx.service"  
            }
        }

    }
}
