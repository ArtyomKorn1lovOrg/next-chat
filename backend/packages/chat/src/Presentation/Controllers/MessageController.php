<?php

namespace Package\Chat\Presentation\Controllers;

use Package\Chat\Domain\DTO\Message;
use Package\Chat\Presentation\Events\MessageSent;
use Package\Shared\Presentation\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use DateTime;

class MessageController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $message = new Message(
            id: 1,
            senderId: 1,
            receiverId: 2,
            text: 'Hello world!',
            createdAt: new DateTime(),
            updatedAt: new DateTime(),
        );
        event(new MessageSent($message));
        return response()->json([
            'message' => 'Success',
        ]);
    }
}
