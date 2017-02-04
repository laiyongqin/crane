/*!
 * Copyright (c) Hvy Industries. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * "HVY", "HVY Industries" and "Hvy Industries" are trading names of JCKD (UK) Ltd
 */
'use strict';

import { NotificationType, LanguageClient } from "vscode-languageclient";
import * as utils from "../utils";

/**
 * List of message types
 */
enum MessageType {
    Info = 1,
    Success,
    Trace,
    Warning,
    Error,
    Status
};

class MessageArg {
    type: MessageType;
    message: String;
};

function action(msg:MessageArg) {
    utils.log('MESSAGE('+msg.type+') '+msg.message);
}

const type: NotificationType<MessageArg, any> = new NotificationType("message");

export function activate(client:LanguageClient) {
    client.onNotification(type, action);
}