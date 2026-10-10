export type Delivery={id:string;customer:string;destination:string;eta:string;status:'In transit'|'Delivered'|'Delayed';progress:number};
export const deliveries:Delivery[]=[
{id:'FD-1042',customer:'Northstar Foods',destination:'Bengaluru, KA',eta:'10:45 AM',status:'In transit',progress:68},
{id:'FD-1043',customer:'Cedar & Co.',destination:'Chennai, TN',eta:'11:20 AM',status:'In transit',progress:44},
{id:'FD-1044',customer:'Morrow Retail',destination:'Hyderabad, TS',eta:'12:05 PM',status:'Delayed',progress:31},
{id:'FD-1045',customer:'Bluebird Market',destination:'Mysuru, KA',eta:'9:55 AM',status:'Delivered',progress:100},
{id:'FD-1046',customer:'Aster Supply',destination:'Pune, MH',eta:'1:40 PM',status:'In transit',progress:20}];