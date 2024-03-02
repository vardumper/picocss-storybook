<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$loader = new \Twig\Loader\FilesystemLoader(dirname(__FILE__) . '/../stories');
$twig = new \Twig\Environment($loader, [
    'debug' => true,
    'cache' => dirname(__FILE__) . '/../.cache',
]);
$twig->addExtension(new \Twig\Extension\DebugExtension());

$app->get('/storybook/{id:.+}', function (Request $request, Response $response, $args) use ($twig) {
    $html = $twig->render(sprintf('%s/index.twig', $args['id']), $request->getQueryParams());
    $response->getBody()->write($html);
    $response = $response->withAddedHeader('Access-Control-Allow-Origin', 'http://localhost:6009');
    return $response;
});

$app->run();
