<?php

namespace OCA\CoTwoClock\EventListener;

use OCP\EventDispatcher\IEventListener;
use OCP\EventDispatcher\Event;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\Security\CSP\AddContentSecurityPolicyEvent;

class AddContentSecurityPolicyEventListener implements IEventListener {
    public function handle(Event $event): void {
        if(!($event instanceof AddContentSecurityPolicyEvent)) {
            return;
        }
        $policy = new ContentSecurityPolicy();
        $policy->addAllowedFrameDomain("https://*.mcc-berlin.net");
        $event->addPolicy($policy);
    }
}
