install:
	npm install

dev:
	npm run dev

deploy:
	npm run build
	npm run pages

lint:
	npx eslint .

fix:
	npx prettier . --write
	npx eslint --fix .
