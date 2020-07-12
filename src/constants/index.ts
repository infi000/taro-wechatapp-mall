// export const ROUTER_MAP = new Map([
//     ['Main','/pages/Main/index'],
//     ['GoodGoods','/pages/GoodGoods/index'],
//     ['Me','/pages/Me/index'],
// ])


export const ROUTER_NAME_MAP = {
    main:'Main',
    goodGoods:'GoodGoods',
    me:'Me'
};

export const ORDER_OTYPE_MAP = new Map([
    ['全部订单',-99],
    ['待付款',1],
    ['待发货',2],
    ['待收货',3],
    ['交易完成',4],
])

export const ORDER_STATUS_MAP = new Map([
    ['待付款',0],
    ['待发货',1],
    ['待收货',2],
    ['交易完成',3],
])

