# PokemonList

# Create a new folder titled '.vscode' and create a new file inside titled 'launch.json'
# Paste the following inside the file:
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}


# Run the following commands to install the required node modules:
npm install

# To run the file:
npm start
