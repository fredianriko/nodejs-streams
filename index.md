# RUN THE CODE IN UBUNTU DOCKER CONTAINER

1. docker pull ubuntu

2. docker run -it --name my-ubuntu-container ubuntu

3. Open ubuntu cli and type below command sequentally

   1. apt-get update
   2. apt-get install -y curl
   3. curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
   4. apt-get install -y nodejs

4. create project directory in ubuntu container

   - mkdir my-project

5. Mount a Volume: To access the container directory in your host's VSCode, you can mount a volume when starting the container. Modify the docker run command from step 3 as follows:

   - docker run -it --name my-ubuntu-container -v /path/to/host/directory:/container/directory ubuntu
   - docker run -it --name my-ubuntu-container -v E:\PROJECT-TESTING\nodejs-testing-repo\ubuntu-container:/my-project ubuntu

6. Mount a volume to the container
   docker run -it --name my-ubuntu-container -v my-ubuntu-volume:/my-project ubuntu

7. to Access the container from vscode cli, but you can only open it in terminal and can't access via vscode to create project file and modify it as it is in your local machine

   - docker exec -it <CONTAINER-NAME> bash

8. install docker extension in vscode, and open the desired ubuntu container,
9. right click the container, and click 'attach visual studio code', this will open new vscode window that opening the container

10. from this on you can navigate using the cli in vscode to `my-project` directory you create earlier
11. and you can use command `code .` to open specific folder using vscode

# CONGRATS

you just

1. create a linux ubuntu container in docker windows /docker desktop
2. mount a volume to a container so it will persist
3. install node js 18.x
4. attach vscode to the container
5. open the directory `in` the container directly from vscode in your local machine `windows`
