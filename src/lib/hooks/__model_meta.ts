/* eslint-disable */
const metadata = {
    models: {
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, hasOwnedSpaces: {
                    name: "hasOwnedSpaces",
                    type: "Space",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'fromOwner',
                }, withSpaces: {
                    name: "withSpaces",
                    type: "Space_User",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, hasLists: {
                    name: "hasLists",
                    type: "List",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'fromOwner',
                }, hasTodos: {
                    name: "hasTodos",
                    type: "Todo",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'fromOwner',
                }, hasClerkUserEvents: {
                    name: "hasClerkUserEvents",
                    type: "ClerkUserEvents",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'fromUser',
                }, hasClerkSessionEvents: {
                    name: "hasClerkSessionEvents",
                    type: "ClerkSessionEvents",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'fromUser',
                }, isDeleted: {
                    name: "isDeleted",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, deletedAt: {
                    name: "deletedAt",
                    type: "DateTime",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        space: {
            name: 'Space', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, slug: {
                    name: "slug",
                    type: "String",
                }, fromOwner: {
                    name: "fromOwner",
                    type: "User",
                    isDataModel: true,
                    backLink: 'hasOwnedSpaces',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "fromOwnerId" },
                }, fromOwnerId: {
                    name: "fromOwnerId",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    isForeignKey: true,
                    relationField: 'fromOwner',
                    defaultValueProvider: $default$Space$fromOwnerId,
                }, withMembers: {
                    name: "withMembers",
                    type: "Space_User",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'space',
                }, hasLists: {
                    name: "hasLists",
                    type: "List",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'fromSpace',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, slug: {
                    name: "slug",
                    fields: ["slug"]
                },
            }
            ,
        }
        ,
        space_User: {
            name: 'Space_User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, space: {
                    name: "space",
                    type: "Space",
                    isDataModel: true,
                    backLink: 'withMembers',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "spaceId" },
                }, spaceId: {
                    name: "spaceId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'space',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'withSpaces',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, role: {
                    name: "role",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "USER" }] }],
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, userId_spaceId: {
                    name: "userId_spaceId",
                    fields: ["userId", "spaceId"]
                },
            }
            ,
        }
        ,
        list: {
            name: 'List', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, title: {
                    name: "title",
                    type: "String",
                }, private: {
                    name: "private",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, hasTodos: {
                    name: "hasTodos",
                    type: "Todo",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'fromList',
                }, fromSpace: {
                    name: "fromSpace",
                    type: "Space",
                    isDataModel: true,
                    backLink: 'hasLists',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "fromSpaceId" },
                }, fromSpaceId: {
                    name: "fromSpaceId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'fromSpace',
                }, fromOwner: {
                    name: "fromOwner",
                    type: "User",
                    isDataModel: true,
                    backLink: 'hasLists',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "fromOwnerId" },
                }, fromOwnerId: {
                    name: "fromOwnerId",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    isForeignKey: true,
                    relationField: 'fromOwner',
                    defaultValueProvider: $default$List$fromOwnerId,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        todo: {
            name: 'Todo', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, title: {
                    name: "title",
                    type: "String",
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, completedAt: {
                    name: "completedAt",
                    type: "DateTime",
                    isOptional: true,
                }, fromList: {
                    name: "fromList",
                    type: "List",
                    isDataModel: true,
                    backLink: 'hasTodos',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "fromListId" },
                }, fromListId: {
                    name: "fromListId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'fromList',
                }, fromOwner: {
                    name: "fromOwner",
                    type: "User",
                    isDataModel: true,
                    backLink: 'hasTodos',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "fromOwnerID" },
                }, fromOwnerID: {
                    name: "fromOwnerID",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    isForeignKey: true,
                    relationField: 'fromOwner',
                    defaultValueProvider: $default$Todo$fromOwnerID,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        clerkUserEvents: {
            name: 'ClerkUserEvents', fields: {
                eventID: {
                    name: "eventID",
                    type: "String",
                    isId: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, fromUser: {
                    name: "fromUser",
                    type: "User",
                    isDataModel: true,
                    backLink: 'hasClerkUserEvents',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "fromUserID" },
                }, fromUserID: {
                    name: "fromUserID",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'fromUser',
                }, userCreatedAt: {
                    name: "userCreatedAt",
                    type: "Float",
                }, userUpdatedAt: {
                    name: "userUpdatedAt",
                    type: "Float",
                }, primaryEmail: {
                    name: "primaryEmail",
                    type: "String",
                }, firstName: {
                    name: "firstName",
                    type: "String",
                }, lastName: {
                    name: "lastName",
                    type: "String",
                }, imageURL: {
                    name: "imageURL",
                    type: "String",
                    isOptional: true,
                }, banned: {
                    name: "banned",
                    type: "Boolean",
                },
            }
            , uniqueConstraints: {
                eventID: {
                    name: "eventID",
                    fields: ["eventID"]
                },
            }
            ,
        }
        ,
        clerkSessionEvents: {
            name: 'ClerkSessionEvents', fields: {
                eventID: {
                    name: "eventID",
                    type: "String",
                    isId: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, fromUser: {
                    name: "fromUser",
                    type: "User",
                    isDataModel: true,
                    backLink: 'hasClerkSessionEvents',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "fromUserID" },
                }, fromUserID: {
                    name: "fromUserID",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'fromUser',
                }, sessionID: {
                    name: "sessionID",
                    type: "String",
                }, clientID: {
                    name: "clientID",
                    type: "String",
                }, sessionStatus: {
                    name: "sessionStatus",
                    type: "String",
                }, sessionCreatedAt: {
                    name: "sessionCreatedAt",
                    type: "Float",
                }, sessionLastActiveAt: {
                    name: "sessionLastActiveAt",
                    type: "Float",
                }, sessionUpdatedAt: {
                    name: "sessionUpdatedAt",
                    type: "Float",
                }, sessionAbandonAt: {
                    name: "sessionAbandonAt",
                    type: "Float",
                }, sessionExpireAt: {
                    name: "sessionExpireAt",
                    type: "Float",
                },
            }
            , uniqueConstraints: {
                eventID: {
                    name: "eventID",
                    fields: ["eventID"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
        user: ['Space', 'Space_User', 'List'],
        space: ['Space_User', 'List'],
        list: ['Todo'],
    }
    ,
    authModel: 'User'
};
function $default$Space$fromOwnerId(user: any): unknown {
    return user?.id;
}

function $default$List$fromOwnerId(user: any): unknown {
    return user?.id;
}

function $default$Todo$fromOwnerID(user: any): unknown {
    return user?.id;
}
export default metadata;
