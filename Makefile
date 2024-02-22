up:
	php -S localhost:8000 -t public
	yarn storybook
down:
	killall php