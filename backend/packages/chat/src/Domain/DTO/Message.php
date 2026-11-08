<?php

namespace Package\Chat\Domain\DTO;

use DateTime;

class Message
{
    /**
     * @param string $id
     * @param string $senderId
     * @param string $receiverId
     * @param string $text
     * @param DateTime|null $createdAt
     * @param DateTime|null $updatedAt
     */
    public function __construct(
        public string $id,
        public string $senderId,
        public string $receiverId,
        public string $text,
        public ?DateTime $createdAt = null,
        public ?DateTime $updatedAt = null,
    )
    {
    }
}
