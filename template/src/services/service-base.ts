import flagwind from "flagwind-core";
import { ICredential } from "src/models";
import { ApplicationContext } from "src/application";

/**
 * 业务服务基类。
 * @abstract
 * @class
 * @version 1.0.0
 */
export default abstract class ServiceBase
{
    /**
     * 获取当前应用的上下文实例。
     * @protected
     * @property
     * @returns ApplicationContext
     */
    protected get applicationContext(): ApplicationContext
    {
        return flagwind.Application.context as ApplicationContext;
    }

    /**
     * 获取当前用户的安全凭证。
     * @protected
     * @property
     * @returns Credential
     */
    protected get credential(): ICredential
    {
        let principal = this.applicationContext.principal;
        
        if(!principal || !principal.isAuthenticated)
        {
            return null;
        }
        
        return principal.credential as ICredential;
    }
}
