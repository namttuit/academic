import { LoadingOutlined } from '@ant-design/icons';

import { FC } from 'react';

import { Spin } from 'antd';

export interface IBlockLoadingProps {
  isOpen?: boolean;
}

export const BlockLoading: FC<IBlockLoadingProps> = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen m-auto bg-purple-primary">
          <div className="text-center mg-auto">
            <Spin indicator={<LoadingOutlined className="text-6xl text-white" spin />} />
            <h2 className="mt-10 text-xl font-semibold text-white uppercase">
              ACADEMIC by Nam Truong
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
