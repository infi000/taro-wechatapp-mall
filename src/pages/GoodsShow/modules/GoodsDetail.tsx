// import Taro from '@tarojs/taro';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import GoodsList from '@/components/GoodsList';
import SelecotModall from './SelecotModal';
import { isArray, toNumber, slice, isString } from 'lodash';
import '../index.scss';

const { useState, useEffect, useMemo } = Taro;
const defaultChooseModal = {
  show: false,
  data: {
    color: [],
    groupprice: [],
    size: [],
  },
};
interface IProps {}
/**
 * 商品展示
 */
const GoodsDetail = (props: IProps) => {
  const { detail, relatedGoods, buysRecordList, isfav, gid } = useSelector((state) => state.goodsShow);
  const [chooseModal, setChooseModal] = useState(defaultChooseModal);
  // const { gid } = props;
  const dispatch = useDispatch();
  const buysList = useMemo(() => {
    const { buys = [] } = buysRecordList;
    if (isArray(buys)) {
      return buys.length > 5 ? slice(buys, 0, 5) : buys;
    }
    return [];
  }, [buysRecordList]);
  const handleShowBuysPage = () => {
    dispatch({ type: 'goodsShow/updateIsShowBuysPaget', payload: true });
  };
  const handleGetUnfav = () => {
    dispatch({ type: 'goodsShow/getUnfav' });
  };
  const handleGetFav = () => {
    dispatch({ type: 'goodsShow/getFav' });
  };
  const handleSaveBuy = () => {
    dispatch({ type: 'goodsShow/createOrder' });
  };
  const handleToChoose = () => {
    let { color, groupprice, size } = detail || {};
    color = isString(color) ? color.split('、') : [];
    groupprice = isString(groupprice) ? groupprice.split('、') : [];
    size = isString(size) ? size.split('、') : [];
    const params = {
      show: true,
      data: {
        color,
        groupprice,
        size,
      },
    };
    setChooseModal(params);
  };
  const handleSelecotModalSubmit = (params:{price:string;size:string;color:string;num:number}) =>{
    setChooseModal(defaultChooseModal);
    console.log("params",params);
    dispatch({ type: 'goodsShow/createOrder',params });
  }
  // useEffect(() => {
  //   // dispatch({ type: 'goodsShow/updateGid', payload: gid });
  //   dispatch({ type: 'goodsShow/getDetail' });
  //   dispatch({ type: 'goodsShow/getPageBuysRecord', payload: { refresh: true } });
  //   dispatch({ type: 'goodsShow/getRelatedGoods' });
  //   dispatch({ type: 'goodsShow/getIsfav' });
  // }, [gid]);
  return (
    <View className='goodsshow-wrap'>
      {/* 商品图片价格描述 */}
      <Swiper className='swiper-con' indicatorColor='#999' indicatorActiveColor='#ddd' circular indicatorDots autoplay>
        {detail.colorimgs &&
          detail.colorimgs[0] &&
          detail.colorimgs[0].map((item) => {
            const { clothcolor, id, fpath } = item;
            return (
              <SwiperItem key={id}>
                <View className='swiper-img-con'>
                  <Image mode='heightFix' lazyLoad style='width: 100%;height: 100%' src={fpath} />
                </View>
              </SwiperItem>
            );
          })}
      </Swiper>
      <View className='goodsshow-con' style={{ paddingTop: 0 }}>
        <View className='price-desc-con'>
          <View className='price-con'>¥{detail.price}</View>
          <View className='desc-con'>{detail.title}</View>
        </View>
      </View>

      {/* 商品属性 */}
      <View className='goodsshow-con' style={{ paddingBottom: 0 }}>
        <View className='at-row at-row__justify--between goods-attr-con'>
          <View className='at-col at-col-2 goods-attr'>品牌</View>
          <View className='at-col at-col-10  goods-attr-desc'>{detail.brand}</View>
        </View>
        <View className='at-row at-row__justify--between goods-attr-con'>
          <View className='at-col at-col-2 goods-attr'>尺寸</View>
          <View className='at-col at-col-10  goods-attr-desc'>{detail.size}</View>
        </View>
      </View>

      {/* 购买记录 */}
      {/* <View className='goodsshow-con goods-sale-con'>
        <View className='at-row at-row__justify--between goods-sale-top'>
          <View className='at-col at-col-5 goods-sale-count'>购买记录({buysRecordList.total})</View>
          <View className='at-col at-col-5 goods-sale-all-btn' onClick={handleShowBuysPage}>
            全部
          </View>
        </View>
        <View className='goods-sale-min goods-sale-mid'>
          {buysList.length > 0 &&
            buysList.map((item, index) => {
              const { create_time, id, price, title } = item;
              const formatCt = toNumber(create_time + '000');
              return (
                <View key={id} className='at-row at-row__justify--between goods-sale-record-con'>
                  <View className='at-col at-col-4 goods-sale-record-l'>{title}</View>
                  <View className='at-col at-col-4 goods-sale-record-m '>¥{price}</View>
                  <View className='at-col at-col-4 goods-sale-record-r'>{new Date(formatCt).toLocaleDateString()}</View>
                </View>
              );
            })}
        </View>
      </View> */}
      {/* 购买须知 */}
      <View className='goodsshow-con goods-warning-con'>
        <View className='at-col at-col-5 goods-warning-title'>购买须知</View>
        {detail.detailimgs &&
          detail.detailimgs.map((item) => {
            const { clothcolor, id, fpath } = item;
            return <Image key={id} mode='widthFix' lazyLoad style='width: 100%;height: 100%;float:left' src={fpath} />;
          })}
      </View>
      {/* 热门推荐 */}
      <View className='goodsshow-con goods-hot-con'>
        <View className='at-col at-col-5 goods-hot-title'>热门推荐</View>
        <GoodsList list={relatedGoods} />
      </View>
      {/* 购买出售 */}
      <View className='footer-con at-row'>
        {/* {isfav == 1 ? <View className='at-col at-col-3 love-btn' onClick={handleGetUnfav}>已收藏</View> : <View className='at-col at-col-3 love-btn' onClick={handleGetFav}>收藏</View>}

        <View className='at-col at-col-4 at-col__offset-1'>
          <View className='sale-btn'>出售</View>
        </View> */}
        {/* {isfav == 1 ? <View className='at-col at-col-3 love-btn' onClick={handleGetUnfav}>已收藏</View> : <View className='at-col at-col-3 love-btn' onClick={handleGetFav}>收藏</View>} */}
        <View className='at-col at-col-2 '>{/* <View className='sale-btn' >出售</View> */}</View>
        <View className='at-col at-col-4 '>
          {isfav == 1 ? (
            <View className='sale-btn' onClick={handleGetUnfav}>
              已收藏
            </View>
          ) : (
            <View className='sale-btn' onClick={handleGetFav}>
              收藏
            </View>
          )}
        </View>

        <View className='at-col at-col-4'>
          {/* <View className='buy-btn' onClick={handleSaveBuy}>购买</View> */}
          <View className='buy-btn' onClick={handleToChoose}>
            购买
          </View>
        </View>
        <View className='at-col at-col-2 '>{/* <View className='sale-btn' >出售</View> */}</View>
      </View>
      {chooseModal.show && (
        <SelecotModall
          color={chooseModal.data.color}
          groupprice={chooseModal.data.groupprice}
          size={chooseModal.data.size}
          handleAdd={handleSelecotModalSubmit}
          handleCancel={() => {
            setChooseModal(defaultChooseModal);
          }}
        />
      )}
    </View>
  );
};

export default GoodsDetail;
