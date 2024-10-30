import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Test = () => {
  const cards1 = Array(10).fill().map((_, i) => `Card 1-${i + 1}`);
  const cards2 = Array(10).fill().map((_, i) => `Card 2-${i + 1}`);

  return (
    <div className="w-full h-[500px] overflow-auto">
      <div className="min-w-max">
        <div className="bg-white z-10 p-4">
          <h2 className="text-2xl font-bold">Heading 1</h2>
        </div>
        <div className="flex pb-4">
          {cards1.map((card, index) => (
            <Card key={index} className="flex-shrink-0 w-64 mr-4">
              <CardContent className="p-4">
                <p>{card}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-white z-10 p-4">
          <h2 className="text-2xl font-bold">Heading 2</h2>
        </div>
        <div className="flex pb-4">
          {cards2.map((card, index) => (
            <Card key={index} className="flex-shrink-0 w-64 mr-4">
              <CardContent className="p-4">
                <p>{card}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;