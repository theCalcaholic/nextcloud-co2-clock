<?php

declare(strict_types=1);

namespace OCA\CoTwoClock\AppInfo;

use OCA\CoTwoClock\EventListener\BeforeTemplateRenderedEventListener;
use OCA\CoTwoClock\EventListener\AddContentSecurityPolicyEventListener;
use OCP\AppFramework\App;
use OCP\AppFramework\Http\Events\BeforeTemplateRenderedEvent;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Security\CSP\AddContentSecurityPolicyEvent;

class Application extends App {
    public const APP_ID = 'co2_clock';

    public function __construct(array $urlParams = []) {
        parent::__construct(self::APP_ID, $urlParams);
        $container = $this->getContainer();
        $dispatcher = $container->get(IEventDispatcher::class);
        $dispatcher->addServiceListener(AddContentSecurityPolicyEvent::class, AddContentSecurityPolicyEventListener::class);
        $dispatcher->addServiceListener(BeforeTemplateRenderedEvent::class, BeforeTemplateRenderedEventListener::class);
    }

}
