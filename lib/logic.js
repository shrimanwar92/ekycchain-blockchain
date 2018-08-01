/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

let factory = getFactory();
let namespace = 'org.acme.kyc';

/**
 * update kyc transaction
 * @param {org.acme.kyc.UpdateUserKyc} tx
 * @transaction
 */
async function UpdateUserKyc(tx) {
    let currentUser = getCurrentParticipant();
    
    currentUser.email = tx.email;
    currentUser.mobile = tx.mobile;

    let userRegistry = await getParticipantRegistry(namespace + '.User');
    await userRegistry.update(currentUser);
}
