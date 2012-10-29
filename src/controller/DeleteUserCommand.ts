///<reference path='../../lib/puremvc/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='../abc/NotificationNames.ts'/>
///<reference path='../abc/ProxyNames.ts'/>

///<reference path='../model/vo/UserVO.ts'/>
///<reference path='../model/vo/RoleVO.ts'/>
///<reference path='../model/UserProxy.ts'/>
///<reference path='../model/RoleProxy.ts'/>

/**
 * Command used to delete a user from the main users list.
 */
module EmployeeAdmin
{
	"use strict";

	import puremvc = module("puremvc");

	export class DeleteUserCommand
		extends SimpleCommand
	{
		/**
		 * @override
		 */
		execute( note:INotification ):void
		{
			var user:UserVO = note.getBody();
			var userProxy:UserProxy = this.facade.retrieveProxy( ProxyNames.USER_PROXY );
			var roleProxy:RoleProxy = this.facade.retrieveProxy( ProxyNames.ROLE_PROXY );

			userProxy.deleteItem( user );
			roleProxy.deleteItem( user );

			this.sendNotification( NotificationNames.USER_DELETED );
		}
	}
}