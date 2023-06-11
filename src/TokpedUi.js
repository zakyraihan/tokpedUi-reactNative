import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Gopay from './assets/gopay.png';
import LihatAll from './assets/lihatsemua.png';
import Pesawat from './assets/pesawat.png';
import Promo from './assets/promo.png';
import Toserba from './assets/toserba.png';
import RewardSilver from './assets/rewardsilver.png';
import tagihan from './assets/tagihan.png';
import Buku from './assets/buku.png';
import Keuangan from './assets/keuangan.png';
import Laptop from './assets/laptop.png';
import Banner1 from './assets/banner1.jpg.webp';
import Banner2 from './assets/banner2.jpg';
import BanggaLokal from './assets/buatanindo.png';
import Cod from './assets/cod.png';
import Play from './assets/Play.png';
import Seru from './assets/seru.png';
import Promodi from './assets/promodi.png';
import Cicil from './assets/cicilantanpabayar.png';
import Bel from './assets/bell-removebg-preview.png';
import Cart from './assets/cart-removebg-preview.png';
// import Envelope from './assets/envelope-removebg-preview.png';
import HamburgerMenu from './assets/hamburgerMenu-removebg-preview.png';
import Barang1 from './assets/barang1.jpg';
import Barang2 from './assets/barang2.png';
import Barang3 from './assets/barang3.png';
import Terbaru1 from './assets/terbaru1.png';
import Terbaru2 from './assets/terbaru2.png';
import Terbaru3 from './assets/terbaru3.png';
import Terbaru4 from './assets/terbaru4.png';
import DiskonHingga from './assets/diskonhingga.png';

export default class TokpedUi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      gopay: '16.000',
      coins: '13.802',
      rumah: 'Patih Kotak',
    };

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={styles.input} placeholder="Cari di Tokopedia" />
            <View
              style={{
                flexDirection: 'row',
                gap: 5,
                marginLeft: 14,
                alignItems: 'center',
                marginTop: 15,
              }}>
              {/* <Image source={Envelope} style={{width: 35, height: 35}} /> */}
              <Image source={Bel} style={{width: 35, height: 27}} />
              <Image source={Cart} style={{width: 35, height: 35}} />
              <Image source={HamburgerMenu} style={{width: 35, height: 35}} />
            </View>
          </View>
          <Text
            style={{
              marginTop: 15,
              color: 'white',
              fontSize: 15,
              fontWeight: 400,
            }}>
            Dikirim Ke Rumah <Text style={{fontWeight: 700}}>{data.rumah}</Text>
          </Text>
          <View style={styles.kotak}>
            <View style={{marginHorizontal: 10, gap: 2}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <Image source={Gopay} style={{width: 25, height: 25}} />
                <Text style={{color: 'hsl(15, 0%, 30%)'}}>Gopay</Text>
              </View>
              <Text style={{fontSize: 14, fontWeight: 700}}>
                Rp{data.gopay}
              </Text>
              <Text style={{fontSize: 12, color: 'hsl(15, 0%, 30%)'}}>
                {data.coins} Coins
              </Text>
            </View>

            <View
              style={{
                borderLeftWidth: 2,
                borderLeftColor: 'slategray',
                opacity: 0.2,
                height: 50,
                position: 'relative',
                left: 38,
              }}></View>
            <View style={{marginHorizontal: 10, gap: 2}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <Image source={RewardSilver} style={{width: 25, height: 25}} />
                <Text style={{color: 'hsl(15, 0%, 30%)'}}>Rewards</Text>
              </View>
              <Text style={{fontSize: 14, fontWeight: 700}}>Silver</Text>
              <Text style={{fontSize: 12, color: 'hsl(15, 0%, 30%)'}}>
                11 Kupon Baru
              </Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.list}>
            <View>
              <Image source={Promo} style={{width: 45, height: 45}} />
              <Text style={{width: 50, marginTop: 15, textAlign: 'center'}}>
                Promo Hari ini
              </Text>
            </View>
            <View>
              <Image source={LihatAll} style={{width: 45, height: 45}} />
              <Text style={{width: 50, marginTop: 15, textAlign: 'center'}}>
                Lihat Semua
              </Text>
            </View>
            <View>
              <Image source={Toserba} style={{width: 45, height: 45}} />
              <Text style={styles.textList}>Toserba</Text>
            </View>
            <View>
              <Image source={Buku} style={{width: 45, height: 45}} />
              <Text style={styles.textList}>Buku</Text>
            </View>
            <View>
              <Image source={tagihan} style={{width: 45, height: 45}} />
              <Text style={{width: 70, marginTop: 15}}>Top Up & Tagihan</Text>
            </View>
            <View>
              <Image source={Pesawat} style={{width: 45, height: 45}} />
              <Text style={{width: 80, marginTop: 15}}>
                travel & Entertain...
              </Text>
            </View>
            <View>
              <Image source={Keuangan} style={{width: 45, height: 45}} />
              <Text style={{marginTop: 15}}>Keuangan</Text>
            </View>
            <View>
              <Image source={Laptop} style={{width: 45, height: 45}} />
              <Text style={{marginTop: 15, width: 70}}>Komputer & Laptop</Text>
            </View>
          </View>
        </ScrollView>

        {/* Banner */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.banner}>
            <View>
              <Image
                source={Banner2}
                style={{width: 370, height: 130, borderRadius: 10}}
              />
            </View>
            <View>
              <Image
                source={Banner1}
                style={{width: 370, height: 130, borderRadius: 10}}
              />
            </View>
            <View>
              <Image
                source={Banner1}
                style={{width: 370, height: 130, borderRadius: 10}}
              />
            </View>
          </View>
        </ScrollView>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.list2}>
            <View style={{alignItems: 'center'}}>
              <Image source={Play} style={{width: 35, height: 40}} />
              <Text
                style={{
                  width: 70,
                  textAlign: 'center',
                  fontSize: 13,
                  marginTop: 10,
                }}>
                Live Shopping
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image source={Seru} style={{width: 35, height: 35}} />
              <Text
                style={{
                  width: 70,
                  textAlign: 'center',
                  fontSize: 13,
                  marginTop: 15,
                }}>
                Tokopedia Seru
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image source={Promodi} style={{width: 35, height: 35}} />
              <Text
                style={{
                  width: 70,
                  textAlign: 'center',
                  fontSize: 13,
                  marginTop: 15,
                }}>
                Promo Di Mana
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image source={Cicil} style={{width: 35, height: 35}} />
              <Text
                style={{
                  width: 80,
                  textAlign: 'center',
                  fontSize: 13,
                  marginTop: 15,
                }}>
                Cicil Tanpa Bayar
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image source={Cod} style={{width: 35, height: 35}} />
              <Text
                style={{
                  width: 80,
                  textAlign: 'center',
                  fontSize: 13,
                  marginTop: 15,
                }}>
                Bayar Di Tempat
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image source={BanggaLokal} style={{width: 35, height: 35}} />
              <Text
                style={{
                  width: 80,
                  textAlign: 'center',
                  fontSize: 13,
                  marginTop: 15,
                }}>
                Bangga Lokal
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'slategray',
            opacity: 0.2,
            marginTop: 20,
          }}></View>
        <Text
          style={{fontSize: 20, fontWeight: 700, padding: 15, marginTop: 5}}>
          Lanjut Cek Ini, yuk
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.LastChek}>
            <View style={styles.ChekRow}>
              <View
                style={{
                  borderWidth: 1,
                  padding: 7,
                  borderRadius: 10,
                  height: 210,
                  borderColor: '#cccccc',
                }}>
                <Image source={Barang1} style={{width: 140, height: 140}} />
                <Text>Balik Lihat</Text>
                <Text style={{fontSize: 18, fontWeight: 600}}>Mouse</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  padding: 7,
                  borderRadius: 10,
                  height: 210,
                  borderColor: '#cccccc',
                }}>
                <Image source={Barang2} style={{width: 140, height: 140}} />
                <Text style={{marginTop: 5}}>Terakhir Kamu Cek</Text>
                <Text style={{fontSize: 17, fontWeight: 600}}>Monitor LED</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  padding: 7,
                  borderRadius: 10,
                  height: 210,
                  borderColor: '#cccccc',
                }}>
                <Image source={Barang3} style={{width: 140, height: 140}} />
                <Text>Cek Lagi yuk</Text>
                <Text style={{fontSize: 18, fontWeight: 600}}>
                  USB Flash Disk
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'slategray',
            opacity: 0.2,
            marginTop: 10,
          }}></View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 600, padding: 15}}>
            Spesial Di Tokopedia Hari ini
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 15,
            }}>
            <Image
              source={Terbaru1}
              style={{width: 180, height: 90, borderRadius: 5}}
            />
            <Image
              source={Terbaru2}
              style={{width: 180, height: 90, borderRadius: 5}}
            />
            <Image
              source={Terbaru3}
              style={{width: 180, height: 90, borderRadius: 5}}
            />
            <Image
              source={Terbaru4}
              style={{width: 180, height: 90, borderRadius: 5}}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'slategray',
            opacity: 0.2,
            marginTop: 10,
          }}></View>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 20, fontWeight: 600, padding: 15}}>
            Belanja yuk!
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 15,
            }}>
            <Text style={{}}>Terbatas! Buruan Serbu</Text>
            <Text style={{color: '#32cd32'}}>Lihat Semua</Text>
          </View>
          <ScrollView
            style={styles.DiskonHingga}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Image
              source={DiskonHingga}
              style={{width: 170, height: 500, marginTop: -50}}
            />
            <View style={{marginTop: 100, marginHorizontal: 10}}>
              <View style={{flexDirection: 'row', gap: 15, marginTop: -50}}>
                <View style={styles.produk1}>
                  <Image source={Barang1} style={{width: 150, height: 150}} />
                  <Text style={{}}>Anker Sound core A20i</Text>
                  <Text style={{fontWeight: 600, marginVertical:7}}>Rp 196.000</Text>
                  <View style={{flexDirection:'row', gap: 5,alignItems:'center'}}>
                    <Text style={{borderRadius: 20, color: 'white', backgroundColor: 'red', opacity: 0.2 , padding:3}}>
                      61%
                    </Text>
                    <Text style={{}}>
                      Rp 499.000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  produk1: {
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 5,
    height: 300,
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#32cd32',
    height: 233,
  },
  input: {
    marginTop: 20,
    width: 190,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 9,
    padding: 10,
    color: 'hsl(15, 0%, 30%)',
  },
  kotak: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 40,
    marginTop: 20,
    backgroundColor: 'white',
    width: 350,
    height: 98,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  list: {
    flexDirection: 'row',
    gap: 26,
    marginHorizontal: 25,
    backgroundColor: 'white',
    marginTop: 20,
  },
  list2: {
    flexDirection: 'row',
    gap: 4,
    marginHorizontal: 20,
    marginTop: 25,
  },
  textList: {
    marginTop: 15,
    textAlign: 'center',
  },
  banner: {
    flexDirection: 'row',
    gap: 15,
    width: 370,
    marginHorizontal: 10,
    marginTop: 25,
  },
  LastChek: {
    padding: 15,
  },
  ChekRow: {
    flexDirection: 'row',
    gap: 10,
  },
  DiskonHingga: {
    backgroundColor: '#32cd32',
    marginTop: 15,
    height: 400,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
