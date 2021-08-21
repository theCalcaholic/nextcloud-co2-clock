<?php

namespace OCA\CoTwoClock\EventListener;

use OCP\Util;
use OCP\IRequest;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;

class BeforeTemplateRenderedEventListener implements IEventListener {
	protected $request;

	public function __construct(IRequest $request) {
		$this->request = $request;
	}

	public function handle(Event $event): void {
		if(!$event->isLoggedIn()) {
			Util::addScript('co2clock', 'inject_iframe');
		}
	}
}

