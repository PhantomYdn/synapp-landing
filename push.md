```shell
docker build --platform linux/amd64 --no-cache -t "registry.gitlab.com/synapp.us/synapp/landing:latest" .   
docker push "registry.gitlab.com/synapp.us/synapp/landing:latest"
```