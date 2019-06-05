import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {Thumbnail} from 'native-base';
import Footer from '../footer/footer';
import { Font } from 'expo';
import AdBanner from '../header/adBanner';
import SlapCard from '../slapCard/slapCard';
import {connect} from 'react-redux';

class LiveGameScreen extends React.Component { 

    constructor(){
        super();
        this.setMinus = this.setMinus.bind(this);
		this.setPlus = this.setPlus.bind(this);
        this.state = {
            fontLoaded: false,
            openSlapCard: false,
            playerImg: null,
            playerClap: 0,
            playerSlap: 0,
            live : 0,
            matchLive : [
                {
                    homeTeam:require("../../assets/logos/logoPsg.jpg"),
                    visitorTeam:require("../../assets/logos/logoMarseille.png"),
                    scoreHomeTeam:5,
                    scoreVisitorTeam:0,
                    timer : '45:00',
                    attList : [
                        {
                        firstname: 'Kylian',
                        lastname: 'MBAPPE',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/mbappe.png"),
                        },
                        {
                        firstname: '',
                        lastname: 'NEYMAR',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/neymar.png"),
                        },
                        {
                        firstname: 'Edinson',
                        lastname: 'CAVANI',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img: require("../../assets/players/cavani.png"),
                         },
                        
                    ],
                    midList : [
                        {
                            firstname: 'Marco',
                            lastname: 'VERRATTI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/verratti.png"),
                            },
                            {
                            firstname: 'Adrien',
                            lastname: 'RABIOT',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/rabiot.png"),
                            },
                            {
                            firstname: 'Julian',
                            lastname: 'DRAXLER',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img: require("../../assets/players/draxler.png"),
                             },
                    ],
                    defList : [
                        {
                            firstname: 'Dani',
                            lastname: 'ALVES',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/alves.png"),
                            },
                            {
                            firstname: '',
                            lastname: 'MARQUINHOS',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/marquinhos.png"),
                            },
                            {
                            firstname: 'Presnel',
                            lastname: 'KIMPEMBE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/kimpembe.png"),
                            },
                            {
                            firstname: 'Laywin',
                            lastname: 'KURZAWA',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/kurzawa.png"),
                            },
                    ],
                   gbList : [
                        {
                            firstname: 'Alphonse',
                            lastname: 'AREOLA',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'G',
                            img:require("../../assets/players/areola2.png"),
                            },
                            
                    ],
                 staffList : [
                        {
                            firstname: 'Thomas',
                            lastname: 'TUCHEL',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/tuchel.png"),
                            },
                            {
                            firstname: 'Antero',
                            lastname: 'HENRIQUE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/antero.png"),
                            },
                            {
                            firstname: 'Nasser',
                            lastname: 'EL KHELAIFI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img: require("../../assets/players/nasser.png"),
                            },
                    ]
                },
                {
                    homeTeam:require("../../assets/logos/logoPsg.jpg"),
                    visitorTeam:require("../../assets/logos/logoMarseille.png"),
                    scoreHomeTeam:8,
                    scoreVisitorTeam:0,
                    timer : '90:00',
                    attList : [
                        {
                        firstname: 'Kylian',
                        lastname: 'MBAPPE',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/mbappe.png"),
                        },
                        {
                        firstname: '',
                        lastname: 'NEYMAR',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/neymar.png"),
                        },
                        {
                        firstname: 'Edinson',
                        lastname: 'CAVANI',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img: require("../../assets/players/cavani.png"),
                         },
                        
                    ],
                    midList : [
                        {
                            firstname: 'Marco',
                            lastname: 'VERRATTI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/verratti.png"),
                            },
                            {
                            firstname: 'Adrien',
                            lastname: 'RABIOT',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/rabiot.png"),
                            },
                            {
                            firstname: 'Julian',
                            lastname: 'DRAXLER',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img: require("../../assets/players/draxler.png"),
                             },
                    ],
                    defList : [
                        {
                            firstname: 'Dani',
                            lastname: 'ALVES',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/alves.png"),
                            },
                            {
                            firstname: '',
                            lastname: 'MARQUINHOS',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/marquinhos.png"),
                            },
                            {
                            firstname: 'Presnel',
                            lastname: 'KIMPEMBE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/kimpembe.png"),
                            },
                            {
                            firstname: 'Laywin',
                            lastname: 'KURZAWA',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/kurzawa.png"),
                            },
                    ],
                   gbList : [
                        {
                            firstname: 'Alphonse',
                            lastname: 'AREOLA',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'G',
                            img:require("../../assets/players/areola2.png"),
                            },
                            
                    ],
                 staffList : [
                        {
                            firstname: 'Thomas',
                            lastname: 'TUCHEL',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/tuchel.png"),
                            },
                            {
                            firstname: 'Antero',
                            lastname: 'HENRIQUE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/antero.png"),
                            },
                            {
                            firstname: 'Nasser',
                            lastname: 'EL KHELAIFI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img: require("../../assets/players/nasser.png"),
                            },
                    ]
                },
                {
                    homeTeam:require("../../assets/logos/logoPsg.jpg"),
                    visitorTeam:require("../../assets/logos/logoRealMadrid.png"),
                    scoreHomeTeam:3,
                    scoreVisitorTeam:1,
                    timer : '75:00',
                    attList : [
                        {
                        firstname: 'Kylian',
                        lastname: 'MBAPPE',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/mbappe.png"),
                        },
                        
                        {
                        firstname: 'Edinson',
                        lastname: 'CAVANI',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img: require("../../assets/players/cavani.png"),
                         },
                        
                    ],
                    midList : [
                        {
                            firstname: 'Marco',
                            lastname: 'VERRATTI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/verratti.png"),
                            },
                            {
                            firstname: 'Adrien',
                            lastname: 'RABIOT',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/rabiot.png"),
                            },
                            {
                                firstname: '',
                                lastname: 'NEYMAR',
                                clap:this.randomNumber(),
                                slap:this.randomNumber(),
                                post: 'A',
                                img:require("../../assets/players/neymar.png"),
                                },
                            {
                            firstname: 'Julian',
                            lastname: 'DRAXLER',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img: require("../../assets/players/draxler.png"),
                             },
                             {
                                firstname: 'Laywin',
                                lastname: 'KURZAWA',
                                clap:this.randomNumber(),
                                slap:this.randomNumber(),
                                post: 'D',
                                img: require("../../assets/players/kurzawa.png"),
                                },
                    ],
                    defList : [
                        {
                            firstname: 'Dani',
                            lastname: 'ALVES',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/alves.png"),
                            },
                            {
                            firstname: '',
                            lastname: 'MARQUINHOS',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/marquinhos.png"),
                            },
                            {
                            firstname: 'Presnel',
                            lastname: 'KIMPEMBE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/kimpembe.png"),
                            },
                           
                    ],
                   gbList :[
                        {
                            firstname: 'Alphonse',
                            lastname: 'AREOLA',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'G',
                            img:require("../../assets/players/areola2.png"),
                            },
                            
                    ],
                   staffList:[
                        {
                            firstname: 'Thomas',
                            lastname: 'TUCHEL',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/tuchel.png"),
                            },
                            {
                            firstname: 'Antero',
                            lastname: 'HENRIQUE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/antero.png"),
                            },
                            {
                            firstname: 'Nasser',
                            lastname: 'EL KHELAIFI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img: require("../../assets/players/nasser.png"),
                            },
                    ]
                }
            ]
        };
    }

    randomNumber = () => { 
        return  Math.floor(Math.random() * 100)
 };
 
    setMinus(){
        // console.log("CLICK M", this.state.live);

        if (this.state.live === 0) {
            this.setState({ live: 0 })
        } else if (this.state.live < 0) {
            this.setState({ live: 0 })
        } else {
            this.setState({ live:this.state.live -1 })
        }
    };

    setPlus(){
        // console.log("CLICK P",this.state.live);

          if (this.state.live >= this.state.matchLive.length-1) {
            this.setState({ live: 0 });
        } else if (this.state.live < 0) {
            this.setState({ live: 0 });
        } else {
            this.setState({live: this.state.live+1});
        }
       
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Orbitron-Regular': require('../../assets/fonts/Orbitron-Regular.ttf'),
            'Orbitron-Bold': require('../../assets/fonts/Orbitron-Bold.ttf')
        });
    
        this.setState({ fontLoaded: true });
    };

    slapPlayer = (openSlapCard) => {
        this.setState({
            openSlapCard,
            playerImg: this.imgSelected,
            playerClap: this.clapCount,
            playerSlap: this.slapCount,
        })
    };


  render() {

    var userData = this.props.user.user? this.props.user.user : {};

    console.log("THIS PROPS USER",userData._id)
    console.log("THIS PROPS USER",userData.teams)


    
    var slapCard;
    if(this.state.openSlapCard) {
    slapCard = <SlapCard slapped={this.slapPlayer} playerImg={this.state.playerImg} playerClap={this.state.playerClap} playerSlap={this.state.playerSlap} />
    }

    for (var i=0; i < this.state.matchLive.length; i++) {
        // console.log("LIVE===>",this.state.matchLive.length)
  
    var attListCopy 
    var midListCopy
    var defListCopy
    var gbListCopy
    var staffListCopy

    attListCopy = this.state.matchLive[this.state.live].attList.map((att, i) =>{
        // console.log("ATTAQUANTS====>",att.img, att.lastname);
        // console.log("SLAP====>",att.slap, att.lastname);
        // console.log("CLAP====>",att.clap, att.lastname);

        var attStatus

        if (att.clap === att.slap){
                    attStatus='#EFEAEA'
            } else if (att.clap > att.slap) {
                    attStatus='#00FF6A'
            } else if (att.clap< att.slap && att.slap < att.clap*3) {
                    attStatus='#FFF200'
            } else if (att.clap*3 < att.slap && att.slap< att.clap*6) {
                    attStatus='#FF6C00'
            } else {
                    attStatus='#FF0027'
            }

        return (

            <TouchableOpacity
            key={i}
            onPress={()=>{ this.imgSelected = att.img; this.clapCount =  att.clap; this.slapCount = att.slap; this.slapPlayer(true)}}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: attStatus}}
            source={att.img}
            />    
            </TouchableOpacity>

        )
    
    });
  
   

    midListCopy =  this.state.matchLive[this.state.live].midList.map((mid, i) =>{

        var midStatus

        if (mid.clap === mid.slap){
                midStatus='#EFEAEA'
            } else if (mid.clap > mid.slap) {
                midStatus='#00FF6A'
            } else if (mid.clap< mid.slap && mid.slap < mid.clap*3) {
                midStatus='#FFF200'
            } else if (mid.clap*3 < mid.slap && mid.slap< mid.clap*6) {
                midStatus='#FF6C00'
            } else {
                midStatus='#FF0027'
            }


        return (
            
            <TouchableOpacity
            key={i}
            onPress={()=>{ this.imgSelected = mid.img; this.clapCount =  mid.clap; this.slapCount = mid.slap; this.slapPlayer(true)}}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: midStatus}}
            source={mid.img}
            />    
            </TouchableOpacity>
        )
    });

    defListCopy =  this.state.matchLive[this.state.live].defList.map((def, i) =>{

        var defStatus

        if (def.clap === def.slap){
                defStatus='#EFEAEA'
            } else if (def.clap > def.slap) {
                defStatus='#00FF6A'
            } else if (def.clap< def.slap && def.slap < def.clap*3) {
                defStatus='#FFF200'
            } else if (def.clap*3 < def.slap && def.slap< def.clap*6) {
                defStatus='#FF6C00'
            } else {
                defStatus='#FF0027'
            }

        return (
            
            <TouchableOpacity
            key={i}
            onPress={()=>{ this.imgSelected = def.img; this.clapCount =  def.clap; this.slapCount = def.slap; this.slapPlayer(true)}}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: defStatus}}
            source={def.img}
            />    
            </TouchableOpacity>
        )
    });

   gbListCopy   =  this.state.matchLive[this.state.live].gbList.map((gb, i) =>{

        var gbStatus

        if (gb.clap === gb.slap){
                gbStatus='#EFEAEA'
            } else if (gb.clap > gb.slap) {
                gbStatus='#00FF6A'
            } else if (gb.clap< gb.slap && gb.slap < gb.clap*3) {
                gbStatus='#FFF200'
            } else if (gb.clap*3 < gb.slap && gb.slap< gb.clap*6) {
                gbStatus='#FF6C00'
            } else {
                gbStatus='#FF0027'
            }


        return (
            
            <TouchableOpacity
            key={i}
            onPress={()=>{ this.imgSelected = gb.img; this.clapCount =  gb.clap; this.slapCount = gb.slap; this.slapPlayer(true)}}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: gbStatus}}
            source={gb.img}
            />    
            </TouchableOpacity>
        )
    });

     staffListCopy =  this.state.matchLive[this.state.live].staffList.map((staff, i) =>{

        var staffStatus

        if (staff.clap === staff.slap){
               staffStatus='#EFEAEA'
            } else if (staff.clap > staff.slap) {
                staffStatus='#00FF6A'
            } else if (staff.clap< staff.slap && staff.slap < staff.clap*3) {
                staffStatus='#FFF200'
            } else if (staff.clap*3 < staff.slap && staff.slap< staff.clap*6) {
                staffStatus='#FF6C00'
            } else {
                staffStatus='#FF0027'
            }


        return (
            
            <TouchableOpacity
            key={i}
            onPress={()=>{ this.imgSelected = staff.img; this.clapCount =  staff.clap; this.slapCount = staff.slap; this.slapPlayer(true)}}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: staffStatus}}
            source={staff.img}
            />    
            </TouchableOpacity>
        )
    });

  }


  return (
    <View
        style={{flex:1, flexDirection:"column",width:"100%"}}>

            {slapCard}

             <AdBanner/>

        <View
             style={styles.score}
        >
                 <TouchableOpacity 
                   onPress={
                    this.setMinus
                  }>
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('../../assets/icons/left-chevron.png')}
                    />
                 </TouchableOpacity>
                 
                    <Thumbnail  source={this.state.matchLive[this.state.live].homeTeam} />

                        <View style={{alignItems:"center"}}>

                        {this.state.fontLoaded ? (   
                        <Text style={{fontSize:33, fontFamily:'Orbitron-Bold', color:'#545454'}}>{this.state.matchLive[this.state.live].scoreHomeTeam} - {this.state.matchLive[this.state.live].scoreVisitorTeam}</Text> 
                        ) : null }
                        
                        {this.state.fontLoaded ? (  
                        <Text  style={{fontSize:12, fontFamily:'Orbitron-Regular', color:'#545445'}}> {this.state.matchLive[this.state.live].timer} </Text>
                        ): null }

                        </View>

                    <Thumbnail  source= {this.state.matchLive[this.state.live].visitorTeam} />
                    

                 <TouchableOpacity
                      onPress={
                        this.setPlus
                      }>
                    <Image
                        style={{width: 20., height: 20}}
                        source={require('../../assets/icons/right-chevron.png')}
                    />
                 </TouchableOpacity>
        </View>
            <ImageBackground
                source={require("../../assets/backgrounds/FieldBackground3.png")}
                style={styles.ibg}
                >
                <View
                    style={styles.goalLine}
                >
                {gbListCopy}        
                </View>
                <View
                    style={styles.defLine}
                >
                {defListCopy}        
                </View>
                <View
                    style={styles.midLine}
                >
                {midListCopy}        
                </View>
                <View
                    style={styles.attLine}
                >
                {attListCopy}       
                </View>
                <View
                    style={styles.staffLine}
                >
                    {staffListCopy}
                </View>

            </ImageBackground>
        <View
         style= {{width:"100%", justifyContent:"flex-start"}}
        >
              <Footer/>
        </View>

    </View>

    )
  }
}


const styles = StyleSheet.create({
    staffLine: {
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    attLine: {
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    midLine: {
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    defLine: {
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    goalLine: {
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    ibg: {
        flex:1,
        alignItems:"center",
    },
    score: {
        backgroundColor: '#FFF200',
        justifyContent:"space-around",
        alignItems:"center", 
        flexDirection:"row", 
        width:"100%",
        height:90
    },
  });


function mapStateToProps(state) {
    // console.log("STATE===>",state)
    // console.log("STATE.TEAMS===>",state.user.user)
    return { user: state.user }
    }
    

    export default connect(
      mapStateToProps, 
      null
      )(LiveGameScreen);


