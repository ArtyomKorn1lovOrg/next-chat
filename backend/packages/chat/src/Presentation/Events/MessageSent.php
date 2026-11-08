<?php

namespace Package\Chat\Presentation\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Package\Chat\Domain\DTO\Message;

class MessageSent implements ShouldBroadcast
{
    public function __construct(
        public Message $message,
    )
    {
    }

    /**
     * @return Channel[]
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('chat.message'),
        ];
    }

    /**
     * @return string
     */
    public function broadcastAs(): string
    {
        return 'sent';
    }

    /**
     * @return array
     */
    public function broadcastWith(): array
    {
        return [
            'id' => $this->message->id,
            'text' => $this->message->text,
        ];
    }
}
