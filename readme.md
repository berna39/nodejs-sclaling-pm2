## Scaling Nodejs app with PM2

In this Application i scaled my app across all CPUs available, without any code modifications. This greatly increases the performance and reliability of your applications, depending on the number of CPUs available. Under the hood, this uses the Node.js cluster module such that the scaled application’s child processes can automatically share server ports. use these commands to test

```
npm install
npm install pm2 -g
pm2 start index.js -i max
pm2 ps

```

max means that PM2 will auto detect the number of available CPUs and run as many processes as possible

