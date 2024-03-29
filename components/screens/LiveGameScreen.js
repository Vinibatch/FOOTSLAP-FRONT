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
                    scoreHomeTeam:2,
                    scoreVisitorTeam:0,
                    timer : '17 : 23',
                    attList : [
                        {
                        firstname: 'Kylian',
                        lastname: 'MBAPPE',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/mbappe2.png"),
                        },
                        {
                        firstname: '',
                        lastname: 'NEYMAR',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/neymar2.png"),
                        },
                        {
                        firstname: 'Edinson',
                        lastname: 'CAVANI',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img: require("../../assets/players/cavani2.png"),
                         },
                        
                    ],
                    midList : [
                        {
                            firstname: 'Marco',
                            lastname: 'VERRATTI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/verratti2.png"),
                            },
                            {
                            firstname: 'Adrien',
                            lastname: 'RABIOT',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/rabiot2.png"),
                            },
                            {
                            firstname: 'Julian',
                            lastname: 'DRAXLER',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img: require("../../assets/players/draxler2.png"),
                             },
                    ],
                    defList : [
                        {
                            firstname: 'Dani',
                            lastname: 'ALVES',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/alves2.png"),
                            },
                            {
                            firstname: '',
                            lastname: 'MARQUINHOS',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/marquinhos2.png"),
                            },
                            {
                            firstname: 'Presnel',
                            lastname: 'KIMPEMBE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/kimpembe2.png"),
                            },
                            {
                            firstname: 'Laywin',
                            lastname: 'KURZAWA',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/kurzawa2.png"),
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
                            img:require("../../assets/players/tuchel2.png"),
                            },
                            {
                            firstname: 'Antero',
                            lastname: 'HENRIQUE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/antero2.png"),
                            },
                            {
                            firstname: 'Nasser',
                            lastname: 'EL KHELAIFI',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img: require("../../assets/players/nasser2.png"),
                            },
                    ]
                },
                {
                    homeTeam:require("../../assets/logos/logoBarca.png"),
                    visitorTeam:require("../../assets/logos/logoRealMadrid.png"),
                    scoreHomeTeam:1,
                    scoreVisitorTeam:1,
                    timer : '23 : 52',
                    attList : [
                        {
                        firstname: 'Lionel',
                        lastname: 'MESSI',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/players/Messi.png"),
                        },
                        
                        {
                        firstname: 'Luis',
                        lastname: 'SUAREZ',
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img: require("../../assets/players/Suarez.png"),
                         },
                         {
                            firstname: 'Ousmane',
                            lastname: 'DEMBELE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'A',
                            img:require("../../assets/players/Dembele.png"),
                            },
                        
                    ],
                    midList : [
                        {
                            firstname: 'Ivan',
                            lastname: 'RAKITIC',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/Rakitic.png"),
                            },
                            {
                                firstname: 'Sergio',
                                lastname: 'BUSQUETS',
                                clap:this.randomNumber(),
                                slap:this.randomNumber(),
                                post: 'M',
                                img: require("../../assets/players/Busquets.png"),
                                 },
                            {
                            firstname: '',
                            lastname: 'ARTHUR',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/players/Arthur.png"),
                            },                            
                    ],
                    defList : [
                        {
                            firstname: '',
                            lastname: 'SEMEDO',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/Semedo.png"),
                            },
                            {
                            firstname: 'Gerard',
                            lastname: 'PIQUE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/players/Piqué.png"),
                            },
                            {
                            firstname: 'Clément',
                            lastname: 'LENGLET',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/players/Lenglet.png"),
                            },
                            {
                                firstname: 'Jordi',
                                lastname: 'ALBA',
                                clap:this.randomNumber(),
                                slap:this.randomNumber(),
                                post: 'D',
                                img: require("../../assets/players/Alba.png"),
                                },
                           
                    ],
                   gbList :[
                        {
                            firstname: 'Marc-André',
                            lastname: 'TER-STEGEN',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'G',
                            img:require("../../assets/players/TerStegen.png"),
                            },
                            
                    ],
                   staffList:[
                        {
                            firstname: 'Ernesto',
                            lastname: 'VALVERDE',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/players/Valverde.png"),
                            },
                            // {
                            // firstname: 'Antero',
                            // lastname: 'HENRIQUE',
                            // clap:this.randomNumber(),
                            // slap:this.randomNumber(),
                            // post: 'S',
                            // img:require("../../assets/players/antero.png"),
                            // },
                            {
                            firstname: 'Josep Maria',
                            lastname: 'BARTHOMEU',
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img: require("../../assets/players/Barthomeu.png"),
                            },
                    ]
                },
                {
                    homeTeam:require("../../assets/logos/FSlogoFull.png"),
                    visitorTeam:require("../../assets/logos/capsule.png"),
                    scoreHomeTeam: '- #13',
                    // scoreVisitorTeam:0,
                    timer : 'La Capsule',
                    attList : [
                        {
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/Capsule-pics/wagner.jpg"),
                        },
                        {
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img:require("../../assets/Capsule-pics/ganfoud.jpg"),
                        },
                        {
                        clap:this.randomNumber(),
                        slap:this.randomNumber(),
                        post: 'A',
                        img: require("../../assets/Capsule-pics/zhang.jpg"),
                         },
                         {
                         clap:this.randomNumber(),
                         slap:this.randomNumber(),
                         post: 'A',
                         img: require("../../assets/Capsule-pics/staron.jpg"),
                          },
                          {
                          clap:this.randomNumber(),
                          slap:this.randomNumber(),
                          post: 'A',
                          img: require("../../assets/Capsule-pics/heu.jpg"),
                           },
                        
                    ],
                    midList : [
                        {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/Capsule-pics/dijoux.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img:require("../../assets/Capsule-pics/peletier.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'M',
                            img: require("../../assets/Capsule-pics/clavel.jpg"),
                             },
                             {
                             clap:this.randomNumber(),
                             slap:this.randomNumber(),
                             post: 'M',
                             img: require("../../assets/Capsule-pics/kalabis.jpg"),
                              },
                              {
                              clap:this.randomNumber(),
                              slap:this.randomNumber(),
                              post: 'M',
                              img: require("../../assets/Capsule-pics/sauveton.jpg"),
                               },
                    ],
                    defList : [
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/Capsule-pics/cauchois.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img:require("../../assets/Capsule-pics/blanc.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/Capsule-pics/bennis.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/Capsule-pics/renard.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/Capsule-pics/lazarus.jpg"),
                            },
                    ],
                   gbList : [
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'G',
                            img:require("../../assets/Capsule-pics/lefevre.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/Capsule-pics/lentz.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/Capsule-pics/lokingfung.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/Capsule-pics/touret.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'D',
                            img: require("../../assets/Capsule-pics/marro.jpg"),
                            },
                            
                    ],
                 staffList : [
                        {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/Capsule-pics/alexis.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/Capsule-pics/yoann.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img: require("../../assets/Capsule-pics/noel.jpg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/Capsule-pics/anaelle.jpeg"),
                            },
                            {
                            clap:this.randomNumber(),
                            slap:this.randomNumber(),
                            post: 'S',
                            img:require("../../assets/Capsule-pics/marlene.jpg"),
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

    var userData = this.props.user? this.props.user : {};

    
    if ( userData && userData.user && userData.user.teams ) {

        for (let i = 0; i < userData.user.teams.length; i++) {
            
            // console.log("USER DATA TEAMS STAFFLIST",userData.user.teams[i])

            for (let j = 0; j < userData.user.teams[i].staffList.length; j++) {
            
                // console.log("USER DATA TEAMS STAFFLIST",userData.user.teams[i].staffList[j].staff.poste)
                
            }

        }
    }


    
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
          
           
                    <Thumbnail 
                    style={{backgroundColor: '#0062FF'}}
                     source={this.state.matchLive[this.state.live].homeTeam} />

                        <View style={{alignItems:"center",width:"40%"}}>

                        {this.state.fontLoaded ? (   
                        <Text style={{fontSize:33, fontFamily:'Orbitron-Bold', color:'#545454'}}>{this.state.matchLive[this.state.live].scoreHomeTeam} - {this.state.matchLive[this.state.live].scoreVisitorTeam}</Text> 
                        ) : null }
                        
                        {this.state.fontLoaded ? (  
                        <Text  style={{fontSize:12, fontFamily:'Orbitron-Regular', color:'#545445'}}> {this.state.matchLive[this.state.live].timer} </Text>
                        ): null }

                        </View>

                    <Thumbnail  
                    source= {this.state.matchLive[this.state.live].visitorTeam} />
           
          
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
                source={require("../../assets/backgrounds/backgroundRondDark.jpg")}
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
        width:"95%",
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
        backgroundColor: '#FFD700',
        justifyContent:"space-around",
        alignItems:"center", 
        flexDirection:"row", 
        width:"100%",
        height:90
    },
  });


function mapStateToProps(state) {
    // console.log("STATE===>",state)
    // console.log("STATE.TEAMS===>",state.user)
    return { user: state.user }
    }
    

    export default connect(
      mapStateToProps, 
      null 
      )(LiveGameScreen);


