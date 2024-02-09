export interface ITask {
  id: number;
  description: string;
  priority: string;
  date: string;
  status: boolean;
}

export interface IColumn {
  field: string;
  headerName: string;
}

export class TableData {
  public static readonly tasks: ITask[] = [
    
    {
      id: 1,
      description: 'Complete project proposal',
      priority: 'High',
      date: '2024-02-10',
      status: false
    },
    {
      id: 2,
      description: 'Review presentation slides',
      priority: 'Medium',
      date: '2024-02-12',
      status: true
    },
    {
      id: 3,
      description: 'Send follow-up emails',
      priority: 'Low',
      date: '2024-02-15',
      status: false
    },
    {
      id: 4,
      description: 'Prepare for client meeting',
      priority: 'High',
      date: '2024-02-18',
      status: false
    },
    {
      id: 5,
      description: 'Update project documentation',
      priority: 'Medium',
      date: '2024-02-20',
      status: true
    },
    {
      id: 6,
      description: 'Research new market trends',
      priority: 'High',
      date: '2024-02-25',
      status: false
    },
    {
      id: 7,
      description: 'Schedule team meeting',
      priority: 'Low',
      date: '2024-02-28',
      status: true
    },
    {
      id: 8,
      description: 'Create project timeline',
      priority: 'Medium',
      date: '2024-03-05',
      status: false
    },
    {
      id: 9,
      description: 'Finalize budget report',
      priority: 'High',
      date: '2024-03-08',
      status: false
    },
    {
      id: 10,
      description: 'Attend industry conference',
      priority: 'Medium',
      date: '2024-03-12',
      status: true
    }
  ];
 
}
