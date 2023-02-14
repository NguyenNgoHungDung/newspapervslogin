import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  news=[
    {
      id :1,
      Name :"Havit HV-H2232D",
      Price: 2000000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "100%",
      Image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/42362272_1937865119634956_3685878557617160192_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=jFulUOJ89SAAX82-gAv&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCzjgmfQweL6YK3SPO5vtykv5ftRcN2m_GuIode0ZU48w&oe=64107151"
    },
    {
      id :2,
      Name :"Soundmax AH335",
      Price: 3000000,
      Discription: "Một trong những nâng cấp đột phá trên HyperX Cloud Alpha S so với Cloud Alpha chính là công nghệ âm thanh vòm ảo HyperX 7.1. Nhờ thiết kế đặc biệt và hỗ trợ bởi phần mềm HyperX NGENUITY",
      Status: "80%",
      Image: "https://vnreview.vn/image/19/13/07/1913074.jpg"
    },
    {
      id :3,
      Name :"Zadez GT-328P",
      Price: 2990000,
      Discription: "Được thiết kế với kích cỡ nhỏ nhắn, đem lại cảm giác trên tai thoải mái và thể hiện chất âm trầm tinh tế, JBL T115TWS là một lựa chọn hết sức sáng giá trên thị trường tai nghe True-Wireless hiện nay. Điểm cộng của sản phẩm nằm ở thời lượng pin tổng cộng 21 tiếng khi kết hợp cùng hộp sạc đi kèm.",
      Status: "50%",
      Image: "https://sohanews.sohacdn.com/k:2016/sad-music-1024-1460039841986/nghe-nhac-buon-qua-nhieu-lieu-co-chet-som.jpg"
    },
    {
      id :4,
      Name :"Ivalue T-138",
      Price: 2300000,
      Discription: "Được đảm bảo bởi thương hiệu sản xuất thiết bị âm thanh lừng danh trên thị trường - JBL, mẫu tai nghe Quantum 50 ghi điểm nhờ thiết kế đầy vẻ năng động trẻ trung, đồng thời sở hữu chất âm ấn tượng với driver 8.6mm.",
      Status: "40%",
      Image: "https://sohanews.sohacdn.com/k:2016/the-liar-and-his-lover-002-1460039823973/nghe-nhac-buon-qua-nhieu-lieu-co-chet-som.jpg"
    },
    {
      id :5,
      Name :"Pioneer SE-CL502T",
      Price: 2400000,
      Discription: "Đến từ một trong những thương hiệu thiết bị âm thanh hàng đầu thế giới, tai nghe JBL Quantum 50 mang đến chất âm trung thực, sắc sảo nhờ sử dụng driver 8.6mm. Sản phẩm có kiểu dáng trẻ trung và cách phối màu hiện đại",
      Status: "20%",
      Image: "https://cdn.tgdd.vn/Files/2015/08/19/686702/5-ung-dung-nghe-nhac-truc-tuyen.jpg"
    },
    {
      id :6,
      Name :"Rapoo S120 ",
      Price: 1990000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "40%",
      Image: "http://vietthanhmusic.edu.vn/resource/files/TIN%20T%E1%BB%A8C/l%E1%BB%A3i-%C3%ADch-c%E1%BB%A7a-vi%E1%BB%87c-nghe-nh%E1%BA%A1c.jpg"
    },
    {
      id :7,
      Name :"Remax T32 ",
      Price: 9990000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "60%",
      Image: "https://khuyennhac.com/wp-content/uploads/2018/11/1-1509030721798-18-0-1048-2000-crop-1509030775702-1509161525538.jpg"
    },
    {
      id :8,
      Name :"Ivalue M-13",
      Price: 7350000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "70%",
      Image: "https://nguoivietnam.vn/wp-content/uploads/2021/07/img_60ea2a01e9553.jpg"
    },
    {
      id :9,
      Name :"XO ON-EAR S32 ",
      Price: 5300000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "70%",
      Image: "https://nguoivietnam.vn/wp-content/uploads/2021/07/nghe-nhac-buon-dan-ong-dang-nghe-nhac.jpg"
    },
    {
      id :10,
      Name :"MDR - ZX110AP",
      Price: 6000000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "60%",
      Image: "https://nguoivietnam.vn/wp-content/uploads/2021/07/ADAM-MUZIC-nghe-nhac-giup-thong-minh-hon-1024x859.jpg"
    },
    {
      id :11,
      Name :"Rapoo VH160" ,
      Price: 8000000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "20%",
      Image: "http://imgs.vietnamnet.vn/Images/2015/11/13/16/20151113162610-girl-happy-music.jpg"
    },
    {
      id :12,
      Name :"JBL QUANTUM100BLK",
      Price: 9500000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "60%",
      Image: "http://imgs.vietnamnet.vn/Images/2015/11/13/16/20151113163018-music-sleep.jpg"
    },
    {
      id :13,
      Name :"JBL T115TWSREDAS ",
      Price: 9990000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "Hết hàng",
      Image: "https://danviet.mediacdn.vn/upload/4-2015/images/2015-10-20/1445304696-dsf.jpg"
    },
    {
      id :14,
      Name :"Fit Pro True Wireless Earbuds",
      Price: 6300000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "60%",
      Image: "https://team-clanx.org/wp-content/uploads/2019/10/cic1381376002.jpg"
    },
    {
      id :15,
      Name :"HyperX Cloud Alpha S",
      Price: 2200000,
      Discription: "Tai nghe chụp tai Gaming Havit HV-H2232D sở hữu thiết kế hiện đại và phong cách trẻ trung với dảy đèn RGB hình tròn ở phần housing kết hợp với logo Havit bắt mắt giúp cho Havit HV-H2232D trở thành một chiếc tai nghe gaming thực thụ. Bên cạnh đó.",
      Status: "60",
      Image: "https://media.istockphoto.com/id/1280339057/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-tr%E1%BA%BB-th%C6%B0-gi%C3%A3n-%E1%BB%9F-nh%C3%A0-v%C3%A0-nghe-nh%E1%BA%A1c.jpg?b=1&s=612x612&w=0&k=20&c=Q-hz2rDixbWN1dtvDu5aI8zjyXBwqCJ464EtsAMmcCQ="
    },
  ]

  total=0;
  totalCart(){
    let subTotal=0;
    for(let i=0; i<this.cart.length; i++){
      subTotal +=this.cart[i].Price;
    }
    this.total = subTotal;
    console.log(this.total);
  }

  cart:any=[]

  addCart(item:any){
    this.cart.push(item)
    // console.log(this.cart)
  }
  
}
