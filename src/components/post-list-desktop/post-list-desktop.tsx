import { Component, Host, h,Prop,State,Watch ,getAssetPath} from '@stencil/core';


@Component({
  tag: 'post-list-desktop',
  styleUrl: 'post-list-desktop.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class PostListDesktop {
  @Prop() imageAss = "test.jpg";
  @Prop() image : string;
  @Prop() type : string;
  @Prop() data : string[];
  @State() internalOptions: string[];


  render() {
    return (
      <Host>
      <div class="main-post">
          <div class="main-avatar">
          <div class="avatar">
            <img src={getAssetPath(`./assets/img/${this.imageAss}`)} />
        </div>
          </div>
       
        <div class="content">
            <div class="top-content">
            <div class="right-top-content">
                <p>نام کاربری</p>
                <p>تاریخ پست</p>
                </div>
                <div class="left-top-content">
                    <div class="sense"><div class="circle"></div></div>
                    <i class="icon-fo-telegram-fill"></i>
                    <i class="icon-fo-more-fill"></i>

                </div>
                </div>

                <div class="center-content">
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                     </p>
                      <img src={getAssetPath(`./assets/img/${this.imageAss}`)}  class="post-img"/>
                </div>
                <div class="bottom-content">
                    <span> 120<i class="icon-fo-retweet"></i></span>
                    <span>120<i class="icon-fo-direct"></i></span>
                    <span>120<i class="icon-fo-like"></i></span>
                </div>
            
        </div>
    </div>
    
    </Host>
    );
  }

  
  componentWillLoad() {
    this.parseOptions();
   
 
}

@Watch('data')
parseOptions() {
    if (this.data) {
        this.internalOptions = this.data;
       
    }
}

}
