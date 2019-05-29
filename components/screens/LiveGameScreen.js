import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {Thumbnail} from 'native-base';
import Footer from '../footer/footer';

class LiveGameScreen extends React.Component { 
    constructor(){
        super();
        // this.state = {
        //     colorStatus:'',
        // };
    }

  render() {

   randomNumber = () => { 
       return  Math.floor(Math.random() * 10000)
};
    

     

    var attList = [
        {
        firstname: 'Kylian',
        lastname: 'MBAPPE',
        clap:randomNumber(),
        slap:randomNumber(),
        post: 'A',
        img:require("../../assets/players/mbappe.png"),
        },
        {
        firstname: '',
        lastname: 'NEYMAR',
        clap:randomNumber(),
        slap:randomNumber(),
        post: 'A',
        img:require("../../assets/players/neymar.png"),
        },
        {
        firstname: 'Edinson',
        lastname: 'CAVANI',
        clap:randomNumber(),
        slap:randomNumber(),
        post: 'A',
        img: require("../../assets/players/cavani.png"),
         },
        
    ];
    var midList = [
        {
            firstname: 'Marco',
            lastname: 'VERRATTI',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'M',
            img:require("../../assets/players/verratti.png"),
            },
            {
            firstname: 'Adrien',
            lastname: 'RABIOT',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'M',
            img:require("../../assets/players/rabiot.png"),
            },
            {
            firstname: 'Julian',
            lastname: 'DRAXLER',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'M',
            img: require("../../assets/players/draxler.png"),
             },
    ];
    var defList = [
        {
            firstname: 'Dani',
            lastname: 'ALVES',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'D',
            img:require("../../assets/players/alves.png"),
            },
            {
            firstname: '',
            lastname: 'MARQUINHOS',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'D',
            img:require("../../assets/players/marquinhos.png"),
            },
            {
            firstname: 'Presnel',
            lastname: 'KIMPEMBE',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'D',
            img: require("../../assets/players/kimpembe.png"),
            },
            {
            firstname: 'Laywin',
            lastname: 'KURZAWA',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'D',
            img: require("../../assets/players/kurzawa.png"),
            },
    ];
    var gbList = [
        {
            firstname: 'Alphonse',
            lastname: 'AREOLA',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'G',
            img:require("../../assets/players/areola.png"),
            },
            
    ];
    var staffList=[
        {
            firstname: 'Thomas',
            lastname: 'TUCHEL',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'S',
            img:require("../../assets/players/tuchel.png"),
            },
            {
            firstname: 'Antero',
            lastname: 'HENRIQUE',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'S',
            img:require("../../assets/players/antero.png"),
            },
            {
            firstname: 'Nasser',
            lastname: 'EL KHELAIFI',
            clap:randomNumber(),
            slap:randomNumber(),
            post: 'S',
            img: require("../../assets/players/nasser.png"),
            },
    ];


    
    var attListCopy = attList.map((att, i) =>{
        console.log("ATTAQUANTS====>",att.img, att.lastname);
        console.log("SLAP====>",att.slap, att.lastname);
        console.log("CLAP====>",att.clap, att.lastname);

        var attStatus

        if (att.clap === att.slap){
                    attStatus='#EFEAEA'
            } else if (att.clap > att.slap) {
                    attStatus='#00FF6A'
            } else if (att.clap*2 < att.slap) {
                    attStatus='#FFF200'
            } else if (att.clap*4 < att.slap) {
                    attStatus='#FF6C00'
            } else {
                    attStatus='#FF0027'
            }

        return (

            <TouchableOpacity
            key={i}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: attStatus}}
            source={att.img}
            />    
            </TouchableOpacity>

        )
   
    });

    var midListCopy = midList.map((mid, i) =>{

        var midStatus

        if (mid.clap === mid.slap){
                midStatus='#EFEAEA'
            } else if (mid.clap > mid.slap) {
                midStatus='#00FF6A'
            } else if (mid.clap*2 < mid.slap) {
                midStatus='#FFF200'
            } else if (mid.clap*4 < mid.slap) {
                midStatus='#FF6C00'
            } else {
                midStatus='#FF0027'
            }


        return (
            
            <TouchableOpacity
            key={i}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: midStatus}}
            source={mid.img}
            />    
            </TouchableOpacity>
        )
    });

    var defListCopy = defList.map((def, i) =>{

        var defStatus

        if (def.clap === def.slap){
                defStatus='#EFEAEA'
            } else if (def.clap > def.slap) {
                defStatus='#00FF6A'
            } else if (def.clap*2 < def.slap) {
                defStatus='#FFF200'
            } else if (def.clap*4 < def.slap) {
                defStatus='#FF6C00'
            } else {
                defStatus='#FF0027'
            }


        return (
            
            <TouchableOpacity
            key={i}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: defStatus}}
            source={def.img}
            />    
            </TouchableOpacity>
        )
    });

    var gbListCopy = gbList.map((gb, i) =>{

        var gbStatus

        if (gb.clap === gb.slap){
                gbStatus='#EFEAEA'
            } else if (gb.clap > gb.slap) {
                gbStatus='#00FF6A'
            } else if (gb.clap*2 < gb.slap) {
                gbStatus='#FFF200'
            } else if (gb.clap*4 < gb.slap) {
                gbStatus='#FF6C00'
            } else {
                gbStatus='#FF0027'
            }


        return (
            
            <TouchableOpacity
            key={i}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: gbStatus}}
            source={gb.img}
            />    
            </TouchableOpacity>
        )
    });

    var staffListCopy = staffList.map((staff, i) =>{

        var staffStatus

        if (staff.clap === staff.slap){
               staffStatus='#EFEAEA'
            } else if (staff.clap > staff.slap) {
                staffStatus='#00FF6A'
            } else if (staff.clap*2 < staff.slap) {
                staffStatus='#FFF200'
            } else if (staff.clap*4 < staff.slap) {
                staffStatus='#FF6C00'
            } else {
                staffStatus='#FF0027'
            }


        return (
            
            <TouchableOpacity
            key={i}
            >
            <Thumbnail 
            style={{borderWidth: 2,  borderColor: staffStatus}}
            source={staff.img}
            />    
            </TouchableOpacity>
        )
    });


  return (
    <View
        style={{flex:1,width:"100%"}}
    >
    <View
            style={styles.header}
        >
        </View>
    <ImageBackground 
        source={require("../../assets/backgrounds/Field_Bg.png")}
        style={styles.ibg}
        >
       
        <View
            style={styles.pub}
        >
        <Text>PUB</Text>
        </View>
        <View
             style={styles.score}
        >
                 <TouchableOpacity 
                    // onPress={this._onPressButton}
                    >
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('../../assets/icons/left-chevron.png')}
                    />
                 </TouchableOpacity>
                 <Thumbnail source={require("../../assets/logos/logoPsg.jpg")} />
                 <View style={{alignItems:"center"}}>
                 <Text style={{fontSize:40}}>5 - 0</Text>
                 <Text style={{fontSize:15}}>45:00</Text>
                 </View>
                 <Thumbnail source={require("../../assets/logos/logoMarseille.png")} />
                 <TouchableOpacity
                    //  onPress={this._onPressButton}
                     >
                    <Image
                        style={{width: 20., height: 20}}
                        source={require('../../assets/icons/right-chevron.png')}
                    />
                 </TouchableOpacity>
        </View>
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
    <Footer/>
    </View>
  )
 }
}


const styles = StyleSheet.create({
    // avatarPlayer: {
        // borderWidth: 2, 
        // borderColor: this.state.colorStatus,
    // },
    staffLine: {
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.14,
        flexDirection:"row"
    },
    attLine: {
        width:"90%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    midLine: {
        width:"70%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    defLine: {
        width:"92%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    goalLine: {
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    header: {
        backgroundColor: '#545454',
        flex:0.03,
        width:"100%"
    },
    pub: {
        backgroundColor: 'red',
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.1, 
        flexDirection:"row",
        width:"100%"
    },
    ibg: {
        flex:1,
        alignItems:"center",
        width:"100%"
    },
    score: {
        backgroundColor: '#FFF200',
        justifyContent:"space-around",
        alignItems:"center", flex: 0.15, 
        flexDirection:"row", 
        width:"100%"
    },
  });
  

export default LiveGameScreen;
