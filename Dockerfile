FROM cypress/included:9.4.1
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "npx cypress run"]