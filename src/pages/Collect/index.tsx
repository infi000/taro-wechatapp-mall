import Taro from '@tarojs/taro';
import { View, Checkbox, Block } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import { useCheckBoxList } from '@/utils/hooks';
import './index.scss';

const { useState } = Taro;

const Collect = () => {
  const LIST = [
    {
      desc: '123',
      price: '100',
      thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    },
    {
      desc: '456',
      price: '200',
      thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    },
    {
      desc: '34234',
      price: '300',
      thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    },
  ];

  const { handleSelectedAll, handleSelected, isSelectedAll, checkBoxList, checkedItem } = useCheckBoxList(LIST);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handleEdit = (params) => {
    setIsEdit(params);
  };
  const handleDel = () => {
    console.log('删除');
  };
  const handleGoto = (item) => {
    console.log('翻页', item);
  };
  return (
    <View>
      <AtList hasBorder={false}>
        {checkBoxList.map((item, index: number) => {
          const { desc, price, thumb, checked } = item;
          return (
            <View className='at-row  at-row__align--center' key={desc}>
              {isEdit && (
                <View className='at-col at-col-1 at-col--auto'>
                  <Checkbox
                    className='radio-list__radio'
                    value={desc}
                    checked={checked}
                    onClick={() => {
                      handleSelected(index);
                    }}
                  ></Checkbox>
                </View>
              )}
              <View className='at-col'>
                <AtListItem
                  title={desc}
                  note={price}
                  thumb={thumb}
                  onClick={() => {
                    if (isEdit) {
                      handleSelected(index);
                    } else {
                      handleGoto(item);
                    }
                  }}
                ></AtListItem>
              </View>
            </View>
          );
        })}
      </AtList>
      <View className='at-row edit-con'>
        {!isEdit && (
          <View
            className='at-col__offset-9 at-col-3 edit-btn'
            onClick={() => {
              handleEdit(true);
            }}
          >
            编辑
          </View>
        )}
        {isEdit && (
          <Block>
            <View className='at-col at-col-3 all-btn'>
              <Checkbox value='选中' checked={isSelectedAll} onClick={() => handleSelectedAll()}>
                全选
              </Checkbox>
            </View>
            <View className='at-col at-col-3 at-col__offset-3 del-btn' onClick={handleDel}>
              删除
            </View>
            <View
              className='at-col at-col-3 cancel-btn'
              onClick={() => {
                handleEdit(false);
                handleSelectedAll(false);
              }}
            >
              取消
            </View>
          </Block>
        )}
      </View>
    </View>
  );
};

export default Collect;
