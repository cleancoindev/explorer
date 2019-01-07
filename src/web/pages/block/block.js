import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { observable, computed, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import nj from 'nornj';
import { registerTmpl } from 'nornj-react';
import { autobind } from 'core-decorators';
import 'flarej/lib/components/antd/table';
import 'flarej/lib/components/antd/input';
import 'flarej/lib/components/antd/button';
import 'flarej/lib/components/antd/pagination';
import 'flarej/lib/components/antd/tabs';
import 'flarej/lib/components/antd/tree';
import 'flarej/lib/components/antd/checkbox';
import Modal from 'flarej/lib/components/antd/modal';
import Tree from 'flarej/lib/components/antd/tree';
import Input from 'flarej/lib/components/antd/input';
import Message from 'flarej/lib/components/antd/message';
import Notification from '../../../utils/notification';
import styles from './block.m.scss';
import tmpls from './block.t.html';
import BlockList from '../../components/blockList';
import Search from 'antd/lib/transfer/search';

//页面容器组件
@registerTmpl('Block')
@inject('store')
@observer
export default class Block extends Component {
  @observable detailModalVisible = false;
  @observable inputRole = 0;
  @observable detailData = [];
  @observable selectedRowKeys = [];
  @observable selectedRows = [];
  @observable blockList = [];
  @observable optionBlockHeight=0;
  @observable optionBlockHash='';

  componentDidMount() {
    const { store: { header } } = this.props;
    header.setSelectMenu(['block']);
    this.Search();
  }

  @autobind
  onInputRole(e) {
    this.inputRole = e.target.value;
  }

  @autobind
  onPressEnterInputRole(){
    this.Search();
  }

  @autobind
  Search(){
    const { store: { block } } = this.props;
    const closeLoading = Message.loading('正在获取数据...', 0);
    let legder=this.props.store.common.getDefaultLedger();
    Promise.all([
      block.getBlockHeight(legder),
    ]).then((success) => {
      let totalBlock=success[0];// 最高区块
      let searchBlock=this.inputRole*1; // 将要搜索的区块
      if(this.inputRole==0){
        searchBlock=totalBlock-3; // 将要搜索的区块
      }
      this.inputRole=searchBlock;
      // 验证区块是否超过最大区块
      if (searchBlock>totalBlock) {
        searchBlock= totalBlock;
      }
      // 验证区块是否小于1
      if (searchBlock<1) {
        searchBlock=1;
      }
      let interval=3,// 区块列表显示数量前后间隔
        length=7,// 区块列表显示数量
        startBlock=searchBlock-3,// 区块列表显示起始高度
        endBlock=searchBlock+3;// 区块列表显示终止高度
      // 起始高度是开始的情况
      if (startBlock<=1) {
        // 计算起始高度
        for (let i = 0; i < length; i++) {
          if (startBlock<1) {
            startBlock++;
            endBlock++;
          }
        }
        // 计算终止高度
        for (let i = 0; i <length; i++) {
          if (endBlock>totalBlock) {
            endBlock--;
          }
        }
      } else if(endBlock>=totalBlock){
        // 计算起始高度
        for (let i = 0; i < length; i++) {
          if (endBlock>totalBlock) {
            
            startBlock>1&&startBlock--;
            endBlock--;
          }
        }
      }
      this.blockList=[];
      for (let i = startBlock; i <= endBlock; i++) {
        this.blockList.push({
          height:i,
          check:i==searchBlock
        });
        
      }
      // this.blockList=this.blockList.reverse();
      closeLoading();
    });
  }
 
  @autobind
  onClickSearch(height){
    return e => {
      const { store: { block } } = this.props;
      this.inputRole=height;
      this.Search();
      Promise.all([
        block.getTransaction({
          height:height,
          from:0,
          to:60,
          ledgers:this.props.store.common.getDefaultLedger()
        }),
        block.getTransactionHash({
          from:height,
          to:height,
          ledgers:this.props.store.common.getDefaultLedger()
        })
      ]).then(() => {
      });
    }   
    
  }

  render() {
    const { store: { block } } = this.props;
    return tmpls.container(this.props, this, {
      styles,
      block,
    });
  }
}