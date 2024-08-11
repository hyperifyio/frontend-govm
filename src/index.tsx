// Copyright (c) 2022-2024. Sendanor <info@sendanor.fi>. All rights reserved.

import { EmailAuthHttpService } from "./io/hyperify/core/EmailAuthHttpService";
import { HgReact } from "./io/hyperify/frontend/HgReact";
import { HgReactContext } from "./io/hyperify/frontend/HgReactContext";
import { HgFrontend } from "./io/hyperify/frontend/HgFrontend";
import {
    GOVM_AUTHENTICATE_EMAIL_URL,
    GOVM_VERIFY_EMAIL_CODE_URL,
    GOVM_VERIFY_EMAIL_TOKEN_URL,
} from "./io/hyperify/govm/core/constants/route";

import { GoVmApp } from './io/hyperify/govm/frontend/components/goVmApp/GoVmApp';
import './io/hyperify/govm/frontend/styles/govm-index.scss';

import "./i18n";

HgFrontend.initialize();
EmailAuthHttpService.initialize(
    GOVM_AUTHENTICATE_EMAIL_URL,
    GOVM_VERIFY_EMAIL_CODE_URL,
    GOVM_VERIFY_EMAIL_TOKEN_URL,
);
HgReact.initialize(
  <HgReactContext>
    <GoVmApp />
  </HgReactContext>
);
