## Installing

1. Install dependencies

```
yarn install && cd client && yarn install && cd ..
```

2. Create variables.env file and replace values with yours

```
NODE_ENV=development
DATABASE="Mongodb Connection String"
JWT_KEY="secretkey"
EMAILUSER="example@gmail.com"
EMAILPASS="example"
HOST="your ip eg. http://192.168.0.14:5000"
ENABLE_SEND_EMAIL="true or false" // false if you don't want to set it up
TEST_DATABASE="testing db"
S3_KEY=
S3_SECRET=
BUCKET_NAME=
BUCKET_REGION=
```

3. Run project

```
yarn server && yarn client-dev
```

localhost port used is :3005

4. Deploy

Deploy to heroku normally using node.js buildpack
