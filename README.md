# SImple Express Server

Your task here is to build a super simple Express server from scratch.

## Requirements

1. All the npm modules you might need are already included in package.json. Begin by installing your requirements.
2. In your `index.js`, create a simple Express server that generates a frontend from the `public/` directory. 
3. Your server should also expose **ONE** api endpoint - a GET request to `/api/info` which will return some text in json.
4. Create a github repo and git commit, push your work. 

## API docs

Here are the relevant API docs you might need.

### `/api/info`

This endpoint will return some text encased in a JSON payload.

#### Returnable

```json
{
    "message": "Hello, Wrold!",
    "success": true
}
```

#### Example Usage

```bash
$ curl -X GET "http://localhost:3000/api/info"
```
