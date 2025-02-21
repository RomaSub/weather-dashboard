install:
	npm install

dev:
	npm run dev

lint:
	npx eslint .

fix:
	npx prettier . --write
	npx eslint --fix .
