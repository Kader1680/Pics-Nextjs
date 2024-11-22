# Use the official Node.js image (version 18)
from node:18

# Set the working directory inside the container
WORKDIR /pics-nextjs

COPY package.json .

# Install dependencies

RUN npm install

# Copy the rest of the application code

COPY . .

# Build the Next.js app
RUN  npm run build

# Expose the port Next.js runs on (3000 by default)

EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]