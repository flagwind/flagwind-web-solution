/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

import flagwind from "flagwind-core";
import IUserProfile from "./user-profile";

/**
 * 表示一个安全凭证模型的定义。
 * @interface
 * @version 1.0.0
 */
export default interface ICredential extends flagwind.ICredential
{
    /**
     * 获取安全凭证对应的用户对象。
     * @member
     * @returns IUserProfile
     */
    user: IUserProfile;
}
